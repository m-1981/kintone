//jQuery.noConflict();
//(function() {
$(document).ready(function(){
	"use strict";

    kintone.events.on('app.record.index.show', function (event){
        
        //ソートテーブル一覧以外は実行しない
        if (event.viewId != 5312842) {
            return;
        }
        
        window.alert('カスタマイズビュー5312842');
        
        $('#table_id').DataTable( {
    
    /* コードが不明
    		"aoColumns": setColName(colList),
    		"asSorting": [[0,"desc"]],
    		"bJQueryUI": true,
    		"bAutoWidth": false,
    		"bJQueryUI": true,
    		
    		// 空の値が来たらハイフン表示（alert対策）
    		"columnDefs": [{
                "defaultContent": "-",
    			"targets": "_all"
    		}],
    */
    		"language": {
    		
    			// CDN利用(日本語ファイル)意味なし？
    //			"url": "//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Japanese.json"
    			
    			// Datatablesのオプション
    			"emptyTable" : "データが登録されていません。",
    			"info" : "_TOTAL_ 件中 _START_ 件から _END_ 件までを表示",
    			"infoEmpty" : "",
    			"infoFiltered" : "(_MAX_ 件からの絞り込み表示)",
    			"infoPostFix" : "",
    			"thousands" : ",",
    			"lengthMenu" : "1ページあたりの表示件数: _MENU_",
    			"loadingRecords" : "ロード中",
    			"processing" : "処理中...",
    			"search" : "検索",
    			"zeroRecords" : "該当するデータが見つかりませんでした。",
    			"paginate" : {
    			    "first" : "先頭",
    			    "previous" : "前へ",
    			    "next" : "次へ",
    			    "last" : "末尾"
                }
    		
    		}
        });
    });
});
//})();
//})(jQuery);

