export function Actions({ actions }) {
    return (
        <div className='flex w-1/2 justify-center items-center flex-col rounded overflow-hidden'>
            {actions.map(action => (
                <div key={action.name} className='w-full p-2 bg-white'>
                    <p className='font-bold'>{action.name}</p>
                    <p>{action.desc}</p>
                </div>
            ))}
        </div>
    )
}
