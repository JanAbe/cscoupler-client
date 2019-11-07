// validate validates the provided input data
// based on the provided validation-function
// func should be a function that expects data as input
// and produces Object{isValid: boolean, error: string | null } as output
export const validate = (data, func) => {
  return func(data)
}

export const validateFirstName = (fname) => {
  if (!fname.length) {
    return { isValid: false, error: 'First name is required' }
  }

  return { isValid: true, error: null }
}

export const validateLastName = (lname) => {
  if (!lname.length) {
    return { isValid: false, error: 'Last name is required' }
  }

  return { isValid: true, error: null }
}

export const validateEmail = (email) => {
  if (!email.length) {
    return { isValid: false, error: 'Email is required' }
  }
        
  return { isValid: true, error: null }
}

export const validatePassword = (pw) => {
  if (!pw.length) {
    return { isValid: false, error: 'Password is required' }
  }

  if (pw.length < 8) {
    return { isValid: false, error: 'Password should be atleast 8 characters long'}
  }

  return { isValid: true, error: null }
}

export const validateStatus = (status) => {
  if (status.stat === undefined || status.stat === null) {
    return { isValid: false, error: 'Status is required' }
  }

  return { isValid: true, error: null }
}

export const validateUniversity = (uni) => {
  if (!uni.length) {
    return { isValid: false, error: 'University is required '}
  }
        
  return { isValid: true, error: null }
}

export const validateSkills = (skills) => {
  if (!skills.length) {
    return { isValid: false, error: 'Atleast one skill needs to be selected' }
  }

  return { isValid: true, error: null }
}

export const validateResume = (resume) => {
  if (resume === null) {
    return { isValid: false, error: 'Resume is required' }
  }

  if (resume.type !== "application/pdf") {
    return { isValid: false, error: 'Resume should be uploaded as PDF' }
  }

  return { isValid: true, error: null }
}

export const validateCompanyName = (name) => {
  if (!name.length) {
    return { isValid: false, error: 'Company name is required' }
  }

  return { isValid: true, error: null }
}

export const validateCompanyInfo = (info) => {
  if (!info.length) {
    return { isValid: false, error: 'Information about the company is required' }
  }

  return { isValid: true, error: null }
}

export const validateCompanyDescription = (descr) => {
  if (!descr.length) {
    return { isValid: false, error: 'Description about the company is required' }
  }

  return { isValid: true, error: null }
}

export const validateCity = (city) => {
  if (!city.length) {
    return { isValid: false, error: 'City is required' }
  }

  return { isValid: true, error: null }
}

export const validateZipcode = (zipcode) => {
  if (!zipcode.length) {
    return { isValid: false, error: 'Zipcode is required' }
  }

  if (!/^\d{4}\s[A-Z]{2}$/.test(zipcode)) {
    return { isValid: false, error: 'Invalid zipcode. It must have the format like 4212 EZ'}
  }

  return { isValid: true, error: null }
}

export const validateStreet = (street) => {
  if (!street.length) {
    return { isValid: false, error: 'Street is required' }
  }

  return { isValid: true, error: null }
}

export const validateNumber = (number) => {
  if (!number.length) {
    return { isValid: false, error: 'Number is required' }
  }

  return { isValid: true, error: null }
}

export const validateJobTitle = (jobTitle) => {
  if (!jobTitle.length) {
    return { isValid: false, error: 'Job title is required' }
  }

  return { isValid: true, error: null }
}