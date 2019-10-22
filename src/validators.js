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
    return { isValid: false, error: 'Email is required '}
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
  if (!status.length) {
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
  return { isValid: true, error: null }
}