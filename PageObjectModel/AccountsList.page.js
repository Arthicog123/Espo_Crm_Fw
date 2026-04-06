export class AccountsList {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.createAccLink=page.getByRole('link', { name: '+ Create Account' })
    }
    async createAccClick(){
        await this.createAccLink.click()
    }
}