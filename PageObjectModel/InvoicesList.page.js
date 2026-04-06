export class InvoicesList {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.createInvoiceLink=page.getByRole('link', { name: '+ Create Invoice' })
    }
    async createInvoiceClick(){
        await this.createInvoiceLink.click()
    }
}