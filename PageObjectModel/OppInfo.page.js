export class OppInfo{
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page=page
        this.oppText=page.locator("//div[@data-name='name']/span")
    }
}