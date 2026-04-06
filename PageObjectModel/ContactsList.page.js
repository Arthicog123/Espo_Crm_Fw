export class ContactsList {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.createConLink=page.getByRole('link', { name: '+ Create Contact' })
    }
    async createConClick(){
        await this.createConLink.click()
    }
}