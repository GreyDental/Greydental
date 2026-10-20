param(
  [string]$Path = "$PSScriptRoot\..\docs\Grey_Dental_Technical_Documentation.docx"
)

# Refresh the Word table-of-contents and page fields after build-docs.py.
# Requires Windows with Microsoft Word installed.

$resolved = (Resolve-Path $Path).Path
$word = New-Object -ComObject Word.Application
$word.Visible = $false
try {
  $doc = $word.Documents.Open($resolved, $false, $false)
  $doc.Fields.Update() | Out-Null
  if ($doc.TablesOfContents.Count -gt 0) {
    $doc.TablesOfContents.Item(1).Update() | Out-Null
  }
  $doc.Save()
  $doc.Close($false)
  Write-Output "Updated fields in $resolved"
}
finally {
  $word.Quit()
}
