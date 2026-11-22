import site from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>
        {site.content.common.copyrightPrefix} {year} {site.owner.name}.{' '}
        {site.content.common.rights}
      </p>
      <p>{site.content.footer.note}</p>
    </footer>
  )
}
