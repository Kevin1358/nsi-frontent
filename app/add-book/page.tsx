
import React from 'react'

const Register = () => {
  return (
    <main>
      <h1>Add Book</h1>
      <form action='/api/addBook' method="post">
      <table>
        <tbody>
          <tr>
            <td>isbn</td>
            <td><input type="text" name="isbn"/></td>
          </tr>
          <tr>
            <td>title</td>
            <td><input type="text" name="title" /></td>
          </tr>
          <tr>
            <td>subtitle</td>
            <td><input type="text" name="subtitle" /></td>
          </tr>
          <tr>
            <td>author</td>
            <td><input type="text" name="author"/></td>
          </tr>
          <tr>
            <td>published</td>
            <td><input type="datetime-local" name="published"/></td>
          </tr>
          <tr>
            <td>publisher</td>
            <td><input type="text" name="publisher"/></td>
          </tr>
          <tr>
            <td>pages</td>
            <td><input type="number" name="pages"/></td>
          </tr>
          <tr>
            <td>description</td>
            <td><input type="text" name="description"/></td>
          </tr>
          <tr>
            <td>website</td>
            <td><input type="text" name="website"/></td>
          </tr>
          <tr>
            <td>Submit</td>
            <td><button type="submit">Submit</button></td>
          </tr>
        </tbody>
      </table>
    </form>
    </main>
  )
}

export default Register