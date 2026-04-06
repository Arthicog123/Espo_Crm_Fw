export class Home {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.accountsLink=page.getByRole('link', { name: 'Accounts' })
        this.contactsLink=page.getByRole('link', { name: 'Contacts' })
        this.leadsLink=page.getByRole('link', { name: 'Leads' })
        this.oppLink=page.getByRole('link', { name: 'Opportunities' })
        this.moreLink=page.locator('#nav-more-tabs-dropdown')
        this.campaignsLink=page.getByRole('link', { name: 'Campaigns' })
        // this.createLink=page.getByTitle('Create')
        // this.taskLink=page.getByRole('link', { name: 'Task', exact: true })
        // this.taskTF=page.locator("//input[@data-name='name']")
        // this.taskSDate=page.locator("//input[@data-name='dateStart']")
        // this.taskEDate=page.locator("//input[@data-name='dateEnd']")
        this.taskLink=page.getByRole('link', { name: 'Tasks' })
        this.salesPurchaseLink=page.getByRole('button', { name: 'Sales & Purchases' })
        this.quotesLink=page.getByRole('link', { name: 'Quotes' })
        this.salesOrderLink=page.getByRole('link', { name: 'Sales Orders' })
        this.invoicesLink=page.getByRole('link', { name: 'Invoices' })

        this.menuLink=page.getByTitle('Menu')
        this.logOutLink=page.getByRole('button', { name: 'Log Out' })

    }
    async acountsClick(params) {
        await this.accountsLink.click()
    }
    async contactsClick(params) {
        await this.contactsLink.click()
    }
    async leadsClick(params) {
        await this.leadsLink.click()
    }
    async oppClick(params) {
        await this.oppLink.click()
    }
    async moreClick(params) {
        await this.moreLink.click()
    }
    async campaignsClick(params) {
        await this.campaignsLink.click()
    }
    async taskClick(){
        await this.taskLink.click()
    }
    async salesPurchaseClick(){
        await this.salesPurchaseLink.click()
    }
    async quotesClick(){
        await this.quotesLink.click()
    }
    async salesOrderClick(){
        await this.salesOrderLink.click()
    }
    async invoicesClick(){
        await this.invoicesLink.click()
    }
    async menuClick(){
        await this.menuLink.click()
    }
    async logOutClick(){
        await this.logOutLink.click()
    }
}