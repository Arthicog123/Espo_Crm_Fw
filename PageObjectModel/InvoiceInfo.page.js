export class InvoiceInfo{
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page=page
        this.invoiceText=page.locator("//div[@data-name='number' and @class='field']/span")
        this.salesOrderText=page.locator("//div[@data-name='salesOrder' and @class='field']/a")
        this.quoteText=page.locator("//div[@data-name='quote' and @class='field']/a")
        this.oppText=page.locator("//div[@data-name='opportunity' and @class='field']/a")
    }
}