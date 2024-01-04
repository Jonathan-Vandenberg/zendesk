'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

const zendeskApiUrl = process.env.NEXT_PUBLIC_ZENDESK_URL

const getTickets = async () => {
  try {
    const response = await axios.get(`${zendeskApiUrl}/users.json`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ZENDESK_TOKEN}`,
      },
    })

    // Handle the response data (tickets)
    console.log(response.data.tickets)
  } catch (error) {
    // Handle errors
    console.error('Error fetching tickets:', error)
  }
}

const ZendeskPage = () => {
  const [tickets, setTickets] = useState()
  useEffect(() => {
    getTickets().then((res: any) => setTickets(res.data))
  }, [])

  console.log(tickets)

  return <div>{tickets}</div>
}

export default ZendeskPage
