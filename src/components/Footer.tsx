import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">InfluMatch</h3>
            <p className="text-sm">
              インフルエンサーと企業を繋ぐ、
              新しいマッチングプラットフォーム
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">インフルエンサー向け</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">案件を探す</a></li>
              <li><a href="#" className="hover:text-white">登録方法</a></li>
              <li><a href="#" className="hover:text-white">報酬について</a></li>
              <li><a href="#" className="hover:text-white">成功事例</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">会社概要</a></li>
              <li><a href="#" className="hover:text-white">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white">利用規約</a></li>
              <li><a href="#" className="hover:text-white">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">© 2024 InfluMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;