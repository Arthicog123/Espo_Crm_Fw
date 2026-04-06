export class QuotesInfo{
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page=page
        this.quoteText=page.locator("//div[@data-name='number' and @class='field']/span")
        this.oppText=page.locator("//div[@data-name='opportunity' and @class='field']//a")
    }
}