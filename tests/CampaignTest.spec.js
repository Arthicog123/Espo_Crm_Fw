//import {test,expect} from '@playwright/test'
import { Login } from '../PageObjectModel/Login.page'
import { Home } from '../PageObjectModel/Home.page'
import { CampaignsList } from '../PageObjectModel/CampaignsList.page'
import { CreateCampaign } from '../PageObjectModel/CreateCampaign.page'
import { CampaignsInfo } from '../PageObjectModel/CampaignsInfo.page'
import data from '../TestData/ConfigData.json'
import campData from '../TestData/CampaignData.json'

import { getRandomNumber } from '../GenericUtility/JavaScriptUtility'

import {test,expect} from '../Fixtures/BaseTest'

test('Create Campaign Test', async({login})=>{
    //const loginPage = new Login(login)
    const homePage = new Home(login)
    const campListPage = new CampaignsList(login)
    const createCampPage = new CreateCampaign(login)
    const campInfoPage = new CampaignsInfo(login)

    const campName = campData.name+getRandomNumber()

    // await loginPage.navigate(data.url)
    // await loginPage.loginUser(data.username,data.password)

    await homePage.moreClick()

    await homePage.campaignsClick()

    await campListPage.createCampClick()

    await createCampPage.createCampaign(campName)

    await expect(campInfoPage.campText).toHaveText(campName)

    // await homePage.menuClick()

    // await homePage.logOutClick()

})