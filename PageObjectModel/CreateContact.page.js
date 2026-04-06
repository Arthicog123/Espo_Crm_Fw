export class CreateContact {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.nameTF=page.getByPlaceholder("Last Name")
        this.accBtn=page.getByTitle("Select").first()
        this.accTF=page.locator("//input[@data-name='textFilter']")
        //this.accList=page.locator("//td[@data-name='name']/a").all()
        this.saveBtn=page.getByRole('button', { name: 'Save' })
    }

    async createContact(name,accName) {
        await this.nameTF.fill(name)
        if (accName) {
            await this.accBtn.click()
            await this.accTF.fill(accName)
            await this.page.keyboard.press('Enter')
            await this.page.getByRole('link', { name: accName }).click()
        }
        
        // for(let acc of this.accList){
        //     if(acc.textContent().includes(accName))
        //         acc.click()
        // }
        await this.saveBtn.click()
    }
}