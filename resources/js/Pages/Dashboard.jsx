import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const stats = [
        { name: "Judul", stat: "Under Progress" },
        { name: "Konten", stat: "Under Progress" },
    ];

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {stats.map((item) => (
                    <div
                        key={item.name}
                        className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
                    >
                        <dt className="truncate text-4xl font-medium text-gray-500">
                            {item.name}
                        </dt>
                        <dd className="mt-1 text-4xl font-semibold tracking-tight text-gray-900">
                            {item.stat}
                        </dd>
                    </div>
                ))}
            </dl>
        </AuthenticatedLayout>
    );
}
