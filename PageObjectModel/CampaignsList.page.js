export class CampaignsList {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.createCampLink=page.getByRole('link', { name: '+ Create Campaign' })
    }
    async createCampClick(){
        await this.createCampLink.click()
    }
}