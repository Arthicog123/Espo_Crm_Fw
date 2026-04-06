import {test,expect} from '@playwright/test'
import { Login } from '../PageObjectModel/Login.page'
import { Home } from '../PageObjectModel/Home.page'
import { LeadsList } from '../PageObjectModel/LeadsList.page'
import { CreateLead } from '../PageObjectModel/CreateLead.page'
import { LeadsInfo } from '../PageObjectModel/LeadsInfo.page'
import { LeadConvert } from '../PageObjectModel/LeadConvert.page'
import data from '../TestData/ConfigData.json'
import leadData from '../TestData/LeadData.json'
import accData from '../TestData/AccountData.json'
import oppData from '../TestData/OpportunityData.json'
import { getFutureDate, getRandomNumber } from '../GenericUtility/JavaScriptUtility'

test.describe('Lead Test', ()=>{

    test.beforeAll()

    test('lead to contact', async({page})=>{
    const loginPage = new Login(page)
    const homePage = new Home(page)
    const leadLiPage = new LeadsList(page)
    const createLeadPage = new CreateLead(page)
    const leadInfoPage = new LeadsInfo(page)
    const leadConvPage = new LeadConvert(page)
    const accName = accData.name+getRandomNumber()
    const leadName = leadData.name+getRandomNumber()

    await loginPage.navigate(data.url)
    await loginPage.loginUser(data.username,data.password)


    await homePage.leadsClick()

    await leadLiPage.createLeadClick()

    await createLeadPage.createLead(leadName,leadData.option1)

    await leadInfoPage.convertClick()

    await leadConvPage.convertToContact()

    await expect(leadInfoPage.statusText).toHaveText(leadData.status)

    await expect(leadInfoPage.conText).toHaveText(leadName)

    await homePage.menuClick()

    await homePage.logOutClick()

    await page.pause()
})

test('lead to account' , async({page})=>{
    const loginPage = new Login(page)
    const homePage = new Home(page)
    const leadLiPage = new LeadsList(page)
    const createLeadPage = new CreateLead(page)
    const leadInfoPage = new LeadsInfo(page)
    const leadConvPage = new LeadConvert(page)
    const accName = accData.name+getRandomNumber()
    const leadName = leadData.name+getRandomNumber()

    await loginPage.navigate(data.url)
    await loginPage.loginUser(data.username,data.password)


    await homePage.leadsClick()

    await leadLiPage.createLeadClick()

    await createLeadPage.createLead(leadName,leadData.option2)

    await leadInfoPage.convertClick()

    await leadConvPage.convertToAccount(accName)

    await expect(leadInfoPage.statusText).toHaveText(leadData.status)

    await expect(leadInfoPage.accText).toHaveText(accName)

    await homePage.menuClick()

    await homePage.logOutClick()

    await page.pause()

})

test('lead to opportunity' , async({page})=>{

    const loginPage = new Login(page)
    const homePage = new Home(page)
    const leadLiPage = new LeadsList(page)
    const createLeadPage = new CreateLead(page)
    const leadInfoPage = new LeadsInfo(page)
    const leadConvPage = new LeadConvert(page)
    const oppName = oppData.name+getRandomNumber()
    const closeDate = getFutureDate(oppData.days)
    const leadName = leadData.name+getRandomNumber()

    await loginPage.navigate(data.url)
    await loginPage.loginUser(data.username,data.password)


    await homePage.leadsClick()

    await leadLiPage.createLeadClick()

    await createLeadPage.createLead(leadName,leadData.option2)

    await leadInfoPage.convertClick()

    await leadConvPage.convertToOpportunity(oppName,oppData.amt,closeDate)

    await expect(leadInfoPage.statusText).toHaveText(leadData.status)

    await expect(leadInfoPage.oppText).toHaveText(oppName)

    await homePage.menuClick()

    await homePage.logOutClick()

    await page.pause()

})
})