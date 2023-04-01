function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Tags() {

    const tags = [
        { name: 'JS', href: '/javascript', bgColor: 'bg-yellow-500' },
        { name: 'C++', href: '/cplusplus', bgColor: 'bg-blue-900' },
        { name: 'SQL', href: '/sql', bgColor: 'bg-green-700' },
        { name: 'CSS', href: '/css', bgColor: 'bg-purple-900' },
        { name: 'C#', href: '/csharp', bgColor: 'bg-cyan-500' },
    ]

    return (
        <div className="flex sm:flex w-full items-center justify-center p-3">
            <div className="flex space-x-1">
                {tags.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.bgColor,
                            item.current ? 'text-white' : 'text-gray-300 hover:bg-[black] hover:text-white',
                            'rounded-md px-3 py-1 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    );
}
