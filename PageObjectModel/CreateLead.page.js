export class CreateLead {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.nameTF=page.getByPlaceholder("Last Name")
        this.statusDD=page.locator("//div[@data-name='status' and @class='field']")
        this.saveBtn=page.getByRole('button', { name: 'Save' })
    }

    // async createLead(name,) {
    //     await this.nameTF.fill(name)
    //     await this.saveBtn.click()
    // }
    async createLead(name,option) {
        await this.nameTF.fill(name)
        if (option) {
        await this.statusDD.click()
        await this.page.locator("//div[@data-selectable]",{hasText:option}).click()
        }
        await this.saveBtn.click()
    }
}