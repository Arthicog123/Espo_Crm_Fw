export class CreateSalesOrder {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.quoteDD=page.locator("//div[@data-name='quote']//button[@title='Select']")
        this.quoteTF=this.page.locator("//input[@data-name='textFilter']")
        this.saveBtn=page.getByRole('button', { name: 'Save' })
    }

    async createSalesOrder(quoteName) {
        await this.quoteDD.click()
        await this.quoteTF.fill(quoteName)
        await this.page.keyboard.press('Enter')
        await this.page.waitForTimeout(3000)
        await this.page.getByRole('link', { name: quoteName }).click()
        await this.page.waitForTimeout(3000)
        await this.saveBtn.click()
    }
}