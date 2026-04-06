export class QuotesList {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.createQuoteLink=page.getByRole('link', { name: '+ Create Quote' })
    }
    async createQuoteClick(){
        await this.createQuoteLink.click()
    }
}