import {test,expect} from '@playwright/test'
import { Login } from '../PageObjectModel/Login.page'
import { Home } from '../PageObjectModel/Home.page'
import { AccountsList } from '../PageObjectModel/AccountsList.page'
import { AccountsInfo } from '../PageObjectModel/AccountsInfo.page'
import { CreateAccount } from '../PageObjectModel/CreateAccount.page'
import { ContactsList } from '../PageObjectModel/ContactsList.page'
import { ContactsInfo } from '../PageObjectModel/ContactsInfo.page'
import { CreateContact } from '../PageObjectModel/CreateContact.page'
import { TasksList } from '../PageObjectModel/TasksList.page'
import { CreateTask } from '../PageObjectModel/CreateTask.page'
import { TasksInfo } from '../PageObjectModel/TasksInfo.page'
import data from '../TestData/ConfigData.json'
import accData from '../TestData/AccountData.json'
import conData from '../TestData/ContactData.json'
import taskData from '../TestData/TaskData.json'
import { getFutureDate, getRandomNumber } from '../GenericUtility/JavaScriptUtility'

test('Task Test', async({page})=>{
    const loginPage = new Login(page)
    const homePage = new Home(page)
    const AccListpage = new AccountsList(page)
    const CreateAccPage = new CreateAccount(page)
    const AccInfoPage = new AccountsInfo(page)
    const ConListPage = new ContactsList(page)
    const CreateConPage = new CreateContact(page)
    const ConInfoPage = new ContactsInfo(page)
    const taskListPage = new TasksList(page)
    const createTaskPage = new CreateTask(page)
    const taskInfoPage = new TasksInfo(page)

    const accName = accData.name+getRandomNumber()
    const conName = conData.name+getRandomNumber()
    const taskName = taskData.name+getRandomNumber()
    const startDate = getFutureDate(taskData.sDate)
    const endDate = getFutureDate(taskData.eDate)

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

    await homePage.taskClick()

    await taskListPage.createTaskClick()

    await createTaskPage.createTask(taskName,accName,taskData.priority,startDate,endDate)

    await expect(taskInfoPage.taskText).toHaveText(taskName)

    await expect(taskInfoPage.accText).toHaveText(accName)

    await homePage.menuClick()

    await homePage.logOutClick()

    await page.pause()
})