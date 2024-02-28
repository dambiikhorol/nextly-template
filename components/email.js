export const EmailTemplate = ({
    name,
    email,
    message
  }) => (
    <div>
      <p>Hello Dear,</p>
      <p>
          {name} has submitted the contact form on your website. Their
          email is {email}!
      </p>
      <p>
      Message: {message}
      </p>
      <p>
          Regards,
          <br />
          CoreTech
      </p>
    </div>
  )