export class CreateOpp {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.nameTF=page.locator("//input[@data-name='name']")
        this.amtTF=page.locator("//input[@data-name='amount']")
        this.closeDate=page.locator("//input[@data-name='closeDate']")
        this.saveBtn=page.getByRole('button', { name: 'Save' })
    }

    async createOpp(name,amt,date) {
        await this.nameTF.fill(name)
        await this.amtTF.type(amt)
        await this.closeDate.type(date)
        await this.page.keyboard.press('Enter')
        await this.saveBtn.click()
    }
    
}