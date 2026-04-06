export class CreateInvoice {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.salesOrderDD=page.locator("//div[@data-name='salesOrder']//button[@title='Select']")
        this.salesOrderTF=this.page.locator("//input[@data-name='textFilter']")
        this.dueDate=this.page.locator("//input[@data-name='dateDue']")
        this.saveBtn=page.getByRole('button', { name: 'Save' })
    }

    async createInvoice(salesOrderName,date) {
        await this.salesOrderDD.click()
        await this.salesOrderTF.fill(salesOrderName)
        await this.page.keyboard.press('Enter')
        await this.page.getByRole('link', { name: salesOrderName }).click()
        await this.dueDate.type(date)
        await this.page.keyboard.press('Enter')
        await this.saveBtn.click()
    }
}