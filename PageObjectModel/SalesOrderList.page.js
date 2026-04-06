export class SalesOrderList {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.createSalesOrderLink=page.getByRole('link', { name: '+ Create Sales Order' })
    }
    async createSalesOrderClick(){
        await this.createSalesOrderLink.click()
    }
}