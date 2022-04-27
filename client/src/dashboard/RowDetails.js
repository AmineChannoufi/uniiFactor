import Axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function RowDetails({adherent,ident,rib,ca,Id,OnDelete}) {
  
  return (
    <tr>
              <th>{adherent}</th>
              <td>{ident}</td>
              <td>{rib}</td>
              <td>{ca}</td>
              <td class="gap__actions">
                <span class="badge bg-info">
                <Link to={`/${Id}`} className="text-white">
          <i className="fas fa-edit"></i>
        </Link>
                </span>

                <span class="badge bg-danger" onClick={()=>OnDelete(Id)}>
                  <i class="fas fa-trash-alt"></i>
                </span>
              </td>
            </tr>
  )
}

export default RowDetails
