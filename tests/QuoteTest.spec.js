import {test,expect} from '@playwright/test'
import { Login } from '../PageObjectModel/Login.page'
import { Home } from '../PageObjectModel/Home.page'
import { OppList } from '../PageObjectModel/OppList.page'
import { CreateOpp } from '../PageObjectModel/CreateOpp.page'
import { OppInfo } from '../PageObjectModel/OppInfo.page'
import { QuotesList } from '../PageObjectModel/QuotesList.page'
import { CreateQuote } from '../PageObjectModel/CreateQuote.page'
import { QuotesInfo } from '../PageObjectModel/QuotesInfo.page'

import { getRandomNumber , getFutureDate } from '../GenericUtility/JavaScriptUtility'

import data from '../TestData/ConfigData.json'
import oppData from '../TestData/OpportunityData.json'

test('Quote Test', async({page})=>{
    const loginPage = new Login(page)
    const homePage = new Home(page)
    const oppListPage = new OppList(page)
    const createOppPage = new CreateOpp(page)
    const oppInfoPage = new OppInfo(page)
    const quoteListpage = new QuotesList(page)
    const createQuotePage = new CreateQuote(page)
    const quoteInfoPage = new QuotesInfo(page)

    const oppName = oppData.name+getRandomNumber()
    const date = getFutureDate(oppData.days)

    await loginPage.navigate(data.url)
    await loginPage.loginUser(data.username,data.password)

    await homePage.oppClick()

    await oppListPage.createOppClick()

    await createOppPage.createOpp(oppName,oppData.amt,date)

    await expect(oppInfoPage.oppText).toHaveText(oppName)

    await homePage.moreClick()

    await homePage.salesPurchaseClick()

    await homePage.quotesClick()

    await quoteListpage.createQuoteClick()

    await createQuotePage.createQuote(oppName)

    await expect(quoteInfoPage.oppText).toHaveText(oppName)

    const quoteNo = await quoteInfoPage.quoteText.textContent()

    console.log('Quote No : ',quoteNo);

    await homePage.menuClick()

    await homePage.logOutClick()

    await page.pause()
})