import {test,expect} from '@playwright/test'
import { Login } from '../PageObjectModel/Login.page'
import data from '../TestData/ConfigData.json'

test.describe('Login Test', ()=>{
    test('Valid Login Test', async({page}) => {

    //await page.setViewportSize({ width: 1920, height: 1080 });
    const loginPage = new Login(page)
    await loginPage.navigate(data.url)
    await loginPage.loginUser(data.username,data.password)

    await expect(page).toHaveTitle("EspoCRM")

    let homeText = page.locator("//span[@title='Home']")
    console.log(await homeText.textContent());
    
    await expect(homeText).toBeVisible({timeout:5000})

    await page.pause()
})

test.only('Invalid Login Test', async ({ page }) => {

    const loginPage = new Login(page)

    await loginPage.navigate(data.url)

    //wrong credentials
    await loginPage.loginUser(data.invalidUN, data.invalidPWD)

    //Assert error message
    //const errorMsg = page.locator('.alert-danger')
    const errorMsg = page.locator("#notification",{hasText:"Wrong username/password"})
    await expect(errorMsg).toBeVisible()

    //Assert still on login page
    await expect(page).toHaveURL('https://test-yantra.espocloud.eu/')

    await expect(loginPage.loginBtn).toBeVisible()
})
})