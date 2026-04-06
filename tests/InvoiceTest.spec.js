import {test,expect} from '@playwright/test'
import { Login } from '../PageObjectModel/Login.page'
import { Home } from '../PageObjectModel/Home.page'
import { OppList } from '../PageObjectModel/OppList.page'
import { CreateOpp } from '../PageObjectModel/CreateOpp.page'
import { OppInfo } from '../PageObjectModel/OppInfo.page'
import { QuotesList } from '../PageObjectModel/QuotesList.page'
import { CreateQuote } from '../PageObjectModel/CreateQuote.page'
import { QuotesInfo } from '../PageObjectModel/QuotesInfo.page'
import { SalesOrderList } from '../PageObjectModel/SalesOrderList.page'
import { CreateSalesOrder } from '../PageObjectModel/CreateSalesOrder.page'
import { SalesOrderInfo } from '../PageObjectModel/SalesOrderInfo.page'
import { InvoicesList } from '../PageObjectModel/InvoicesList.page'
import { CreateInvoice } from '../PageObjectModel/CreateInvoice.page'
import { InvoiceInfo } from '../PageObjectModel/InvoiceInfo.page'

import { getRandomNumber , getFutureDate } from '../GenericUtility/JavaScriptUtility'

import data from '../TestData/ConfigData.json'
import oppData from '../TestData/OpportunityData.json'
import invoiceData from '../TestData/InvoiceData.json'

test('Quote Test', async({page})=>{
    const loginPage = new Login(page)
    const homePage = new Home(page)
    const oppListPage = new OppList(page)
    const createOppPage = new CreateOpp(page)
    const oppInfoPage = new OppInfo(page)
    const quoteListpage = new QuotesList(page)
    const createQuotePage = new CreateQuote(page)
    const quoteInfoPage = new QuotesInfo(page)
    const soListPage = new SalesOrderList(page)
    const createSoPage = new CreateSalesOrder(page)
    const soInfoPage = new SalesOrderInfo(page)
    const invoiceListPage = new InvoicesList(page)
    const createInvoicePage = new CreateInvoice(page)
    const invoiceInfoPage = new InvoiceInfo(page)

    const oppName = oppData.name+getRandomNumber()
    const oppDate = getFutureDate(oppData.days)
    const invoiceDate = getFutureDate(invoiceData.dueDate)

    await loginPage.navigate(data.url)
    await loginPage.loginUser(data.username,data.password)

    await homePage.oppClick()

    await oppListPage.createOppClick()

    await createOppPage.createOpp(oppName,oppData.amt,oppDate)

    await expect(oppInfoPage.oppText).toHaveText(oppName)

    await homePage.moreClick()

    await homePage.salesPurchaseClick()

    await homePage.quotesClick()

    await quoteListpage.createQuoteClick()

    await createQuotePage.createQuote(oppName)

    await expect(quoteInfoPage.oppText).toHaveText(oppName)

    const quoteNo = await quoteInfoPage.quoteText.textContent()

    console.log('Quote No : ',quoteNo);

    await homePage.moreClick()

    await homePage.salesPurchaseClick()

    await homePage.salesOrderClick()

    await soListPage.createSalesOrderClick()

    await createSoPage.createSalesOrder(quoteNo)

    await expect(soInfoPage.quoteText).toHaveText(quoteNo)

    await expect(soInfoPage.oppText).toHaveText(oppName)

    const soNo = await soInfoPage.salesOrderText.textContent()

    console.log('Sales Order No : ',soNo);

    await page.pause()

    await homePage.moreClick()

    await homePage.salesPurchaseClick()

    await homePage.invoicesClick()

    await invoiceListPage.createInvoiceClick()

    await createInvoicePage.createInvoice(soNo,invoiceDate)

    await expect(invoiceInfoPage.salesOrderText).toHaveText(soNo)

    await expect(invoiceInfoPage.quoteText).toHaveText(quoteNo)

    await expect(invoiceInfoPage.oppText).toHaveText(oppName)

    const InvoiceNo = await invoiceInfoPage.invoiceText.textContent()

    console.log('Invoice No : ',InvoiceNo);

    await homePage.menuClick()

    await homePage.logOutClick()

    await page.pause()
})