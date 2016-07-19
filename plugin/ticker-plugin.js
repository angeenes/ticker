
;( function( $, window, document, undefined ) {

	"use strict";

		var pluginName = "newsTicker",
			defaults = {
				url: '',
				animation: 'bottom-up',
				itemSelector: '#ticker'
			};

		function Plugin ( element, options ) {
			this.element = element;
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		$.extend( Plugin.prototype, {
			init: function() {
				this.newsTicker();
			},
				newsTicker: function () {
				var $selector = this.settings.itemSelector
				var $newsTickerEl = $(this.settings.itemSelector)
				$newsTickerEl.append('<ul></ul>')
				var $containerEl = $newsTickerEl.find('ul')
				var $animation = this.settings.animation
				$.ajax({
					url: this.settings.url
				}).done(function (json) {
					var $items = json.data.totalItems
					if ($items >= 1) {
						appendNewsList(json)
					}
				})

				function appendNewsList (json) {
					$.each(json.data.items, function (index) {
						var $title = json.data.items[index].titleSeo
						var $url = json.data.items[index].resource.url
						var $newsTpl = '<li class=""><a href="' + $url + '" class="title">' + $title + '</a></li>'
						$containerEl.append($newsTpl)
						animateNews()
					})
				}
				function animateNews () {
					var i = 0
					var $titles = $containerEl.find('li')
					var $containerAnimated = document.body.querySelector($selector)
					$containerEl.find('li').eq(0).addClass('animate-ticker '+ $animation)
					$containerAnimated.addEventListener('animationend', function (e) {
							var $title = $titles[i++]
							$containerEl.find('li').eq(i).addClass('animate-ticker '+ $animation).siblings('.animate-ticker').removeClass('animate-ticker '+ $animation)
							if (i === $titles.length) {
								i = 0
								$containerEl.find('li').eq(0).addClass('animate-ticker '+ $animation)
								$containerEl.find('li').eq(1).removeClass('animate-ticker '+ $animation)
							}
						},false)
				}
			}
		})

		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );
