import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface Campaign {
  id: number;
  title: string;
  company: string;
  platform: string;
  status: 'ongoing' | 'completed' | 'cancelled';
  startDate: string;
  endDate: string;
  budget: string;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    title: "春の新作コスメPRキャンペーン",
    company: "Beauty Co.",
    platform: "Instagram",
    status: "ongoing",
    startDate: "2024-04-01",
    endDate: "2024-04-30",
    budget: "¥50,000"
  },
  {
    id: 2,
    title: "プロテインドリンク新商品PR",
    company: "Fitness Lab",
    platform: "TikTok",
    status: "completed",
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    budget: "¥30,000"
  },
  {
    id: 3,
    title: "ワイヤレスイヤホンレビュー",
    company: "Tech Gear",
    platform: "YouTube",
    status: "cancelled",
    startDate: "2024-02-01",
    endDate: "2024-02-28",
    budget: "¥40,000"
  }
];

const CampaignManagementPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ongoing':
        return '対応中';
      case 'completed':
        return '完了';
      case 'cancelled':
        return 'キャンセル';
      default:
        return status;
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesStatus = selectedStatus === 'all' || campaign.status === selectedStatus;
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">案件管理</h1>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="案件を検索"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
        >
          <option value="all">すべてのステータス</option>
          <option value="ongoing">対応中</option>
          <option value="completed">完了</option>
          <option value="cancelled">キャンセル</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  案件名
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  企業名
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  プラットフォーム
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  期間
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  報酬
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ステータス
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCampaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{campaign.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {campaign.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {campaign.platform}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {campaign.startDate} 〜 {campaign.endDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {campaign.budget}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(campaign.status)}`}>
                      {getStatusText(campaign.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CampaignManagementPage;