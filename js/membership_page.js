function validate()
{
    const form = document.forms['registration'];
    const name = form['name'].value;
    const email = form['email'].value;
    const gender = form['gender'].value;
    const address = form['address'].value;
    const country = form['country'].value;
    const letter = form['letter'].value;
    const tnc = form['tnc'].checked;

    let message = ''
    if(!name || !email || !gender || !address || !country || !letter || !tnc)
    {
        message = "All field must be filled!"
    }
    else if(name.length < 14)
    {
        message = "Insert your full name!"
    }
    else if(country == 'NULL')
    {
        message = "Choose your country!"
    }
    else if(gender != 'male' && gender != 'female')
    {
        message = "Please choose your gender!"
    }
    else if(address.length < 15)
    {
        message = "Please input your proper address"
    }
    else if(!tnc)
    {
        message = "You must agree to our terms and conditions!"
    }
    else if(letter != "yes" && letter != "no")
    {
        message = "Please choose your option of the daily letter"
    }

    if(message)
    {
        document.getElementById('errorMsg').innerHTML = message
        return false;
    }
    else
    {
        let conf = confirm("Are you sure to continue registration?")

        if(conf)
        {
            let verif  = prompt("Please input your verification number: ")

            if(verif = "")
            {
                alert("Please verify your data!")
                return false
            }
            else
            {
                alert("Registration sucess!")
            }
        }
        else
        {
            return false;
        }
    }
}