export class CampaignsInfo{
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page=page
        this.campText=page.locator("//div[@data-name='name']/span")
    }
}