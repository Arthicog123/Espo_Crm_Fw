export class Login {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.usernameTF=page.getByLabel("Username")//page.getByRole('textbox', { name: 'Username' })
        this.passwordTF=page.getByLabel("Password")//page.getByRole('textbox', { name: 'Password' })
        this.loginBtn=page.getByRole('button',{name:'Log in'})

    }

    async navigate(url) {
        await this.page.goto(url)
    }
    async loginUser(username, password) {
        await this.usernameTF.fill(username)
        await this.passwordTF.fill(password)
        await this.loginBtn.click()
    }
}