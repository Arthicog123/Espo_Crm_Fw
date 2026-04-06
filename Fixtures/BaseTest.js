import {test as base} from '@playwright/test'
import { Login } from '../PageObjectModel/Login.page'
import { Home } from '../PageObjectModel/Home.page'
import data from '../TestData/ConfigData.json'

export const test = base.extend({

    login : async({page}, use)=>{
        const loginPage = new Login(page)
        await loginPage.navigate(data.url)
        await loginPage.loginUser(data.username,data.password)

        await use(page)

        const homePage = new Home(page)
        await homePage.menuClick()
        await homePage.logOutClick()
    },

//   logout: async ({ login }, use) => {
//     // test runs first
//     await use()

//     // after test → logout
//     const homePage = new Home(login)
//     await homePage.menuClick()
//     await homePage.logOutClick()
//     //await login.pause()
//   }
})

export {expect} from '@playwright/test'