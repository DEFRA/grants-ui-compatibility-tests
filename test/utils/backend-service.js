import { getGrantsUiBackendAuthorizationToken } from './backend-auth-helper.js'

export async function deleteApplicationState(sbi, crn, grantCode) {
  const response = await fetch(`${browser.options.baseBackendUrl}/state?businessId=${sbi}&userId=${crn}&grantId=${grantCode}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${getGrantsUiBackendAuthorizationToken()}`
    }
  })
  await expect(response.status === 200 || response.status === 404).toBe(true)
}
