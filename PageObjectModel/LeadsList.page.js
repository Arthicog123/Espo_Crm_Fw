export class LeadsList {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.createLeadLink=page.getByRole('link', { name: '+ Create Lead' })
    }
    async createLeadClick(){
        await this.createLeadLink.click()
    }
}