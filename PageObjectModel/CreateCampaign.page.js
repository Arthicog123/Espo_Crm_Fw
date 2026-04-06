export class CreateCampaign {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.nameTF=page.locator("//input[@data-name='name']")
        this.saveBtn=page.getByRole('button', { name: 'Save' })
    }

    async createCampaign(name) {
        await this.nameTF.fill(name)
        await this.saveBtn.click()
    }
}