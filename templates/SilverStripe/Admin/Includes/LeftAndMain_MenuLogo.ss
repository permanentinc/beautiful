<div class="cms-sitename">
    <a href="#" class="cms-sitename__link font-icon-silverstripe font-icon-large" target="_blank"></a>
    <% if $SiteConfig.LogoWide %>
        <a class="cms-sitename__title" href="$BaseHref" target="_blank">
            <div class="uncollapsedLogo"><img src="$SiteConfig.LogoWide.URL" title="$ApplicationName (Version - $CMSVersion)"></div>
            <div class="collapsedLogo"><img src="$SiteConfig.LogoSquare.URL" title="$ApplicationName (Version - $CMSVersion)"></div>
        </a>
        <% else %>
        <a class="cms-sitename__title" href="$BaseHref" target="_blank"><% if $SiteConfig %>$SiteConfig.Title<% else %>$ApplicationName<% end_if %></a>
    <% end_if %>
</div>


<% if $SiteConfig.Highlight %>
    <style>
        :root{--primary-colour:$SiteConfig.Highlight;}
    </style>
<% end_if %>