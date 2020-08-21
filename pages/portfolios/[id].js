import { useRouter } from 'next/router'

const Details = ({ query, someVal }) => {
    const router = useRouter()

    return (
        <div>
            {`Portfolio details ${router.query.id}, ${query.id} and ${someVal}`}
        </div>
    )
}

Details.getInitialProps = ({ query }) => ({
    query,
    someVal: 'Rak'
})

export default Details