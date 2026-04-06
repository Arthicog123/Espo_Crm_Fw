export class OppList {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.createOppLink=page.getByRole('link', { name: '+ Create Opportunity' })
    }
    async createOppClick(){
        await this.createOppLink.click()
    }
}