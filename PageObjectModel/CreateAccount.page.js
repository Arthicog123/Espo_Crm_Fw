export class CreateAccount {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.nameTF=page.locator("//input[@data-name='name']")
        this.saveBtn=page.getByRole('button', { name: 'Save' })
    }

    async createAccount(name) {
        await this.nameTF.fill(name)
        await this.saveBtn.click()
    }
}