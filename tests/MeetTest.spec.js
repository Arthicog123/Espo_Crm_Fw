import {test,expect} from '@playwright/test'
import { Login } from '../PageObjectModel/Login.page'
import { Home } from '../PageObjectModel/Home.page'
import { ContactsList } from '../PageObjectModel/ContactsList.page'
import { ContactsInfo } from '../PageObjectModel/ContactsInfo.page'
import { CreateContact } from '../PageObjectModel/CreateContact.page'
import data from '../TestData/ConfigData.json'
import conData from '../TestData/ContactData.json'
import meetData from '../TestData/MeetData.json'
import { getRandomNumber } from '../GenericUtility/JavaScriptUtility'

test('Account - Contact Integration  Test', async({page})=>{
    const loginPage = new Login(page)
    const homePage = new Home(page)
    const ConListPage = new ContactsList(page)
    const CreateConPage = new CreateContact(page)
    const ConInfoPage = new ContactsInfo(page)

    const conName = conData.name+getRandomNumber()
    const meetName = meetData.name+getRandomNumber()

    await loginPage.navigate(data.url)
    await loginPage.loginUser(data.username,data.password)

    await homePage.contactsClick()

    await ConListPage.createConClick()

    await CreateConPage.createContact(conName)

    await expect(ConInfoPage.conText).toHaveText(conName)

    await ConInfoPage.actClick()

    await ConInfoPage.meetClick()

    await ConInfoPage.sheduleMeet(meetName)

    await expect(ConInfoPage.meetText).toHaveText(meetName)

    await homePage.menuClick()

    await homePage.logOutClick()

    await page.pause()
})