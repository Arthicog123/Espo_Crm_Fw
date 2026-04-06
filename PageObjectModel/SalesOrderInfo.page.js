export class SalesOrderInfo{
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page=page
        this.salesOrderText=page.locator("//div[@data-name='number' and @class='field']/span")
        this.quoteText=page.locator("//div[@data-name='quote' and @class='field']/a")
        this.oppText=page.locator("//div[@data-name='opportunity' and @class='field']/a")
    }
}