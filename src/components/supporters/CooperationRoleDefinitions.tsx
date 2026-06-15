import { cooperationRoleDefinitions } from '@/content/supporters';

export function CooperationRoleDefinitions() {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full min-w-[480px] text-sm sm:text-base text-left">
        <caption className="sr-only">パートナーとサポーターの区分</caption>
        <thead>
          <tr className="border-b border-gray-100 bg-cream/60">
            <th scope="col" className="px-4 sm:px-6 py-3 font-semibold text-navy whitespace-nowrap">
              区分
            </th>
            <th scope="col" className="px-4 sm:px-6 py-3 font-semibold text-navy whitespace-nowrap">
              対象
            </th>
            <th scope="col" className="px-4 sm:px-6 py-3 font-semibold text-navy">
              意味
            </th>
          </tr>
        </thead>
        <tbody>
          {cooperationRoleDefinitions.map((definition) => (
            <tr key={definition.role} className="border-b border-gray-50 last:border-0">
              <th
                scope="row"
                className="px-4 sm:px-6 py-4 font-semibold text-navy whitespace-nowrap align-top"
              >
                {definition.label}
              </th>
              <td className="px-4 sm:px-6 py-4 text-gray-700 whitespace-nowrap align-top">
                {definition.target}
              </td>
              <td className="px-4 sm:px-6 py-4 text-gray-700 leading-relaxed align-top">
                {definition.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
