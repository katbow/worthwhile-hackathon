import React from 'react'
import {Table} from 'react-bootstrap'

export default (props) => {
  const info = props.currentEvent
  return (
    <Table>
      <tbody>
        <tr>
          <td>Event title</td>
          <td>{info.title}</td>
        </tr>
        <tr>
          <td>Venue</td>
          <td>{info.venue}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td>{info.time}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{info.description}</td>
        </tr>
        <tr>
          <td>Link</td>
          <td>
            <a href={info.url} target='_blank'>Event Link</a>
          </td>
        </tr>
        <tr>
          <td>Attendees</td>
          <td>{info.attendees}</td>
        </tr>
      </tbody>
    </Table>
  )
}
