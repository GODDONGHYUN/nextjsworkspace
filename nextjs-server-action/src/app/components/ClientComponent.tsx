import { myaction } from '@/lib/actions'
import React from 'react'


export default function ClientComponent() {
    return (
        <form action={myaction}>
            <button type = 'submit'> Add to Cart</button>
        </form>
    )
}
