export class CreateQuote {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.oppDD=page.locator("//div[@data-name='opportunity']//button[@title='Select']")
        this.oppTF=page.locator("//input[@data-name='textFilter']")
        this.taxDD=page.locator("//div[@data-name='item-taxes']//button[@title='Select']")
        this.taxLink=page.getByRole('link',{name:'EX'})
        this.saveBtn=page.getByRole('button', { name: 'Save' })
    }
    async createQuote(oppName) {
        if (oppName) {
            await this.oppDD.click()
            await this.oppTF.fill(oppName)
            await this.page.keyboard.press('Enter')
            await this.page.getByRole('link', { name: oppName }).click()
            await this.taxDD.click()
            await this.taxLink.click()
        }
        
        await this.saveBtn.click()
    }
}