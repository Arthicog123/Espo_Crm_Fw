import {test,expect} from '@playwright/test'
import { Login } from '../PageObjectModel/Login.page'
import { Home } from '../PageObjectModel/Home.page'
import { AccountsList } from '../PageObjectModel/AccountsList.page'
import { AccountsInfo } from '../PageObjectModel/AccountsInfo.page'
import { CreateAccount } from '../PageObjectModel/CreateAccount.page'
import { ContactsList } from '../PageObjectModel/ContactsList.page'
import { ContactsInfo } from '../PageObjectModel/ContactsInfo.page'
import { CreateContact } from '../PageObjectModel/CreateContact.page'
import data from '../TestData/ConfigData.json'
import accData from '../TestData/AccountData.json'
import conData from '../TestData/ContactData.json'

import { getRandomNumber } from '../GenericUtility/JavaScriptUtility'

test('Account - Contact Integration  Test', async({page})=>{
    const loginPage = new Login(page)
    const homePage = new Home(page)
    const AccListpage = new AccountsList(page)
    const CreateAccPage = new CreateAccount(page)
    const AccInfoPage = new AccountsInfo(page)
    const ConListPage = new ContactsList(page)
    const CreateConPage = new CreateContact(page)
    const ConInfoPage = new ContactsInfo(page)

    const accName = accData.name+getRandomNumber()
    const conName = conData.name+getRandomNumber()

    await loginPage.navigate(data.url)
    await loginPage.loginUser(data.username,data.password)

    await homePage.acountsClick()

    await AccListpage.createAccClick()

    await CreateAccPage.createAccount(accName)

    await expect(AccInfoPage.accText).toHaveText(accName)

    await homePage.contactsClick()

    await ConListPage.createConClick()

    await CreateConPage.createContact(conName,accName)

    await expect(ConInfoPage.conText).toHaveText(conName)

    await expect(ConInfoPage.accText).toHaveText(accName)

    await homePage.menuClick()

    await homePage.logOutClick()

    await page.pause()
})