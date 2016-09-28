$(function() {
	var html = $('#test').html();
	var articles = [
		{
			title: 'Article 1',
			content: 'Content of the article 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut quisquam ipsum veritatis dolor sequi maiores, deleniti rem placeat soluta magnam voluptate iure eveniet ratione reprehenderit praesentium repellat reiciendis, incidunt vitae. Odit placeat tenetur velit dolor, ipsa, aperiam inventore esse laudantium qui eaque porro autem dolorum, odio rem doloremque! Atque commodi obcaecati autem cumque voluptatem sint a cupiditate reiciendis nemo accusamus, necessitatibus nobis, repellat distinctio laudantium neque in debitis eveniet maxime doloremque. Autem, repudiandae laudantium eos beatae! Voluptatem amet quis aspernatur, consectetur excepturi. Eligendi sunt accusamus nam earum rerum recusandae. Mollitia velit obcaecati magnam corrupti itaque nesciunt voluptate. Dolorum, non.'
		},
		{
			title: 'Article 2',
			content: 'Content of the article 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum doloribus asperiores optio minima aut, doloremque, ipsa? Quis totam aperiam nihil eveniet, perferendis commodi quia nam accusantium sapiente, debitis molestias unde sit quasi excepturi doloribus optio ab laborum quod tempora blanditiis voluptatum numquam delectus quos architecto. Ducimus quisquam deleniti, accusantium debitis. Omnis, fugit eveniet necessitatibus accusantium delectus corporis maiores perferendis totam! Quidem cumque consequatur velit libero illum maxime, dolor tenetur hic inventore quos id, voluptate quibusdam, sequi voluptas, odit sint. Reprehenderit incidunt possimus officia sequi quos deserunt praesentium. Dolor quos labore hic beatae tempora excepturi quis reprehenderit, tempore accusantium inventore.'
		},		
		{
			title: 'Article 3',
			content: 'Content of the article 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nulla pariatur iure fuga praesentium ullam, dicta nemo libero maiores illo eaque, delectus laborum temporibus sed dolores sit ex aperiam deserunt, blanditiis cupiditate eum nisi doloribus! Perspiciatis optio reprehenderit atque labore, alias, aut dolor qui odio, quos velit odit, nobis illum dolorem quod ratione ut modi aliquam! Cupiditate nesciunt vero aliquam labore dolore, ducimus aperiam ullam sequi eaque iure dolorem quis soluta facilis quo. Provident rerum, expedita. Omnis repellat itaque modi recusandae at, quos vero placeat dignissimos voluptate ipsa est! Vitae similique harum explicabo, repellendus magni. Iure recusandae molestias dolore ipsum.'
		}
	];
	var content = tmpl (html, {
		data : articles
	});
	$('body').append(content);
});